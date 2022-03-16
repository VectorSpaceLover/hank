import LeftSideBar from "./components/leftSidebar/leftSidebar";


export default function Admin({children}){
    return (
        <div>
            <LeftSideBar />
            <div>
                {children}
            </div>
        </div>
    )

}