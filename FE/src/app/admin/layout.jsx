import DashBoardNavBar from "@/components/layout/DashBoardNavBar";
import TopDashBoard from "@/components/layout/TopDashBoard";


export default function RootLayout({ children }) {
    return (
        <div className="flex ">
            <DashBoardNavBar />
            <div className="w-full">
                <div className="p-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
