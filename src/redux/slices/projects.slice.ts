import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsCardProps } from "../../components/ProjectsCard/ProjectsCard.props";


export interface ProjectsDetails{
    validDetails: boolean;
    projects?: ProjectsCardProps;
    sort: 'all' | 'ready' | 'in developing';
}

const initialState: ProjectsDetails = {
    validDetails: false,
    sort: 'all'
}

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers:{
        close(state){
            state = {
                validDetails: state.validDetails = false,
                sort: state.sort 
            }
            
        },
        open(state, action:PayloadAction<{projects:ProjectsCardProps}>){
            state.validDetails = true
            state.projects = action.payload.projects
        },
        sort(state, action: PayloadAction<{sort: 'all' | 'ready' | 'in developing'}>){
            state.sort = action.payload.sort
        }
    }
})

export default projectSlice.reducer
export const projectsActions = projectSlice.actions