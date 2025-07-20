
export const RevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount
}) => {

    return <div className="bg-white shadow-sm  ml-20 mt-20 ">
        <div className="flex text-gray-700 gap-0.5 pl-2">
            <div>
                {title}
            </div>
            <div className="flex justify-center flex-col h-full pt-1 pl-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" stroke-width="1.5" stroke="currentColor" class="size-6 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </div>
        <div className="flex gap-x-25 pt-8">
            <div className="font-semibold text-3xl">
                ₹ {amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium flex-col justify-center">
                <div className="flex ">
                    <div className="text-blue-700">
                        {orderCount} orders(s)
                    </div>

                    <div className="flex flex-center pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div> : null}
        </div>
    </div>
}