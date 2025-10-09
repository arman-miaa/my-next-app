import Sidebar from "@/components/Sidebar";


const DashboarLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="flex">
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboarLayout;