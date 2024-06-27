import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsCardProps } from "../../components/ProjectsCard/ProjectsCard.props";


export interface ProjectsDetails{
    valid: boolean;
    projects: ProjectsCardProps | {};
    sort: string;
}

const initialState: ProjectsDetails = {
    valid: false,
    projects: {},
    sort: 'all'
}

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers:{
        close(state){
            state.valid = false
            state.projects = {}
        },
        open(state, action:PayloadAction<{projects:ProjectsCardProps}>){
            state.valid = true
            state.projects = action.payload.projects
        }
    }
})

export default projectSlice.reducer
export const projectsActions = projectSlice.actions