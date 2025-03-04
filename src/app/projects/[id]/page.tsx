import React from 'react'
import {projects} from '../../../../public/projects';
import {notFound} from 'next/navigation';



type Params = Promise<{id: number}>;

interface ProjectPageProps {
    params: Params;

}

export default async function page({params}: ProjectPageProps) {

    const resolvedParams = await params; // Await the params if it's a Promise
    const {id} = resolvedParams;

    console.log(id);
    

    console.log("projects", projects);
    
    const project = projects.find(project => String(project.id) === String(id));

    console.log("project", project);
    
    if (!project) {
        notFound();
    }   


  return (
    <div>page</div>
  )
}
