const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ0Mzg2Nzk0LTAxMjEtNDhkMS04ZjUwLWMwYjhmMjdhOGI1ZC0xNzEzNDA1OTMzNDQzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNTk3MDk2OGUtODdjYi00YWQ1LWI1ZWQtYWU3Njc5NWYwYzJmIiwidHlwZSI6InQifQ.2YcnxYFua-UqITZAsHKl4SEO6wc1VjPdkFwjCgJZJFw'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
