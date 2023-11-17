import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';



export const App = () => {
	
	const [pages, setPages] = useState([]);
	
	const [pageContent, setPageContent] = useState(null);
	
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	
	
	
	async function pageViewHandler(slug) {
		
		const response = await fetch(`${apiURL}/wiki/${slug}`)
		const data = await response.json()
		console.log(data)
		setPageContent(data)
		
		
	}



	useEffect(() => {
		fetchPages();
	}, [pages]);

	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{/* {pageView ? <pageView /> : PageList} */}
			{pageContent?
			<>
			 <h3>{pageContent.title}</h3> 
			 <h4>{pageContent.author.name}</h4>
			 <h4>{pageContent.author.email}</h4>
			 <p>{pageContent.content}</p>
			 
			 </>
			 : <PagesList pages={pages} pageViewHandler={pageViewHandler} />}
			
		</main>
	)
}