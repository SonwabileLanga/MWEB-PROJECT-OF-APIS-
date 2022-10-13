
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { priceRange } from './Pricerange'
import Boxed from './components/Box'
import _ from "lodash";
import { Radio, RadioGroup, Stack, Checkbox } from '@chakra-ui/react'
import { Select, Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'

(function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
 {item.products.map((productInfo, promoCode) => {
                return (
                  <div className="card-wrap" key={promoCode}>
                    <div className="cardcontent">
                      <h4 className="dheadings">{productInfo.productName}</h4>
                      <p>{productInfo.subcategory}</p>
                      <div className="card-content-footer">
                        <h4 className="dheadings">
                          R{productInfo.productRate}
                        </h4>
                        <img
                          src="https://www.mweb.co.za/media/images/providers/provider-evotel.png"
                          className="provider"
                          alt="provider"
                        />
                        <button className="check-coverage">
                          {" "}
                          Check Coverage{" "}
  const [value, setValue] = useState(JSON.stringify(["FTTH-VODA-CLAWBACK-100MBUP","FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP","VUMA-REACH-RECURRING", "VUMA-REACH-28DAY-SERVICE", "VUMA-REACH-28DAY-SERVICE-40MBPS"]))
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

<SimpleGrid>
        <Box m={3}>
          <h3>Select Fibre Campaign</h3>
          <RadioGroup onChange={onChange} value={value} >
            <Stack direction='row'>
              {campaignsData.map(camp => (<Radio value={JSON.stringify(camp.promocodes)} key={JSON.stringify(camp.promocodes)}>{camp.name}</Radio>))}
            </Stack>
          </RadioGroup>
        </Box>
        <Box m={3}>
          <h3>Fibre Providers</h3>
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            {providers.map(camp => (<Checkbox onChange={onChangeSelectedProducts} value={valued} value={JSON.stringify(camp)} key={JSON.stringify(camp)} size='md' colorScheme='blue' >
              {camp}
            </Checkbox>))}
          </Stack>
        </Box>
        <Box w='100%' m={3} >
          <>
            <Select variant='outline' placeholder="Prices" width={200} onChange={onPriceRangeChange}>
              {priceRange.map(pR => (<option value={JSON.stringify(pR.label)} key={pR.label} >{pR.label}</option>
              ))}
            </Select>
          </>
        </Box>
        <Box>
          <Boxed selectedProducts={selectedProducts} />
        </Box>
      </SimpleGrid>

    </>
  );
}

export default App;

