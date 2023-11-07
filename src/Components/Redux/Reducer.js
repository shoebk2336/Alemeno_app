


let InitialValue={
    HomeFetched_Data:[],
    SinglePage_Data:{},
    Dashboard:[],
    CourseCompleted:[],
    SearchResult:""

}

const MainReducer=(state=InitialValue,action)=>{
    const {type,payload}=action
    switch(type){
        case "Home_Data":return{...state,HomeFetched_Data:payload}
        case "SinglePage":return{...state,SinglePage_Data:payload}
        case "Dashboard":return({...state,Dashboard:payload})
        case "Course_Completed":return{...state,CourseCompleted:[...state.CourseCompleted,payload]}
        case "search":return{...state,SearchResult:payload}
        default: return state
    }

}
export default MainReducer