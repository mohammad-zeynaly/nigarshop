import { useNavigate } from "react-router-dom";


function NotFound () {
    const navigate = useNavigate()

    return(
        <section className="page404">
            <div className="container">
                <div className="flex flex-col items-center my-16 text-center">
                <h1 className="text-3xl text-[#666]">صفحه مورد نظر شما یافت نشد!</h1>
                <button onClick={() => navigate("/")} className="bg-[#666] text-white rounded-[20px] py-1 px-2 my-8">صفحه نخست</button>
                <div className="w-full sm:w-[500px]">
                    <img className="w-full object-cover" src="../assets/images/404/404.png" alt="صفحه پیدا نشد" />
                </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;