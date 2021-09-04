export const siteData = {
  "base": "/OXRS/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "OXRS Docs",
      "description": "The Open eXtensible Rack System"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}