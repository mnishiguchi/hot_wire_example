// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "stylesheets/main.scss"

// Shoelace components
// https://shoelace.style/tutorials/integrating-with-rails
import { setBasePath, defineCustomElements } from '@shoelace-style/shoelace'
const rootUrl = document.currentScript.src.replace(/\/packs.*$/, '')

// Path to the assets folder (should be independent from the current script source path
// to work correctly in different environments)
setBasePath(rootUrl + '/packs/js/')

// This will import all shoelace web components for convenience.
// https://shoelace.style/getting-started/installation?id=using-webpack
defineCustomElements()
