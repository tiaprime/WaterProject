import { useState } from "react"
import CategoryFilter from "../components/CategoryFilter"
import ProjectList from "../components/ProjectList"
import Welcome from "../components/Welcome"

function ProjectsPage(){
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    return (
        <div className='container mt-4'>
        <div className='row bg-primary text-white '>
            <Welcome/>
        </div>
        <div className='row'>
            <div className='col-md-3'>
                <CategoryFilter selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}/>
            </div>
            <div className='col-md-9'>
                <ProjectList selectedCategories={selectedCategories}/>
            </div>
        </div>

        </div>


    )
}

export default ProjectsPage