/// <reference lib="dom" />

export const getScrollTop = () => {
  if (typeof scrollY != "undefined") {
    // NOTE: most browsers except IE before #9
    return scrollY
  } else {
    const body = window.document.body
    let document = window.document.documentElement
    document = document.clientHeight ? document : body
    return document.scrollTop
  }
}

export const debounce = (func: () => void, wait: number, immediate?: boolean) => {
  let timeout: NodeJS.Timeout
  return function() {
    let context = this
    let args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export const scrollTo = (selector: string) => {
  const element = document.querySelector(selector)
  if (element == null) return
  const top = element.getBoundingClientRect().top + window.pageYOffset
  window.scrollTo({
    top, // scroll so that the element is at the top of the view
    behavior: "smooth"
  })
}

export const download = (path, name) => {
  let element = document.createElement("a")
  element.setAttribute("href", path)
  element.setAttribute("download", name)
  element.style.display = "none"
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
