import React, { useState } from 'react';
import apiURL from '../api';
// import {pageContent} from "./App"

export const Page = ({page, pageViewHandler}) => {


  return <>
    <h3 onClick={() => pageViewHandler(page.slug)}>{page.title}</h3>
  </>
} 
	