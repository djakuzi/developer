import { SortProjectsCardProps } from "../components/SortProjectsCard/SortProjectsCard.props";

export const DATA_SORT_PROJECTS: SortProjectsCardProps[] =[
    {
        title: 'Все',
        sort: 'all',
    },
    {
        title: "Завершенные",
        sort: 'ready'
    },
    {
        title: "В разработке",
        sort: "in developing" ,
    }
]