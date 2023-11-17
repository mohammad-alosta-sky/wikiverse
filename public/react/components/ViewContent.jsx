export function ViewContent({pageContent, setPageContent}) {
    const tags = "#" + pageContent.tags[0].name
    // console.log(tags);
    return (
        <>
			 <h3>{pageContent.title}</h3> 
			 <h3>{pageContent.createdAt}</h3> 
			 <h4>{pageContent.author.name}</h4>
			 <h4>{pageContent.author.email}</h4>
			 <p>{pageContent.content}</p>
			 <h6>{tags}</h6> {/* TODO:show all tags */}

             <button onClick={() => setPageContent(null)}>Back to list</button>
             <button>Edit</button>

			 
		 </>
    )
}