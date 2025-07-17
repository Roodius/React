import { SearchBar } from "./SearchBar";


export function Appbar(){

    return <div className="flex justify-between pt-4 pl-4 pr-4">

        <div className="text-md inline-flex justify-center pb-2">
            Youtube
        </div>
            
        <div>
            <SearchBar />
        </div>
        
        <div>sing in</div>

    </div>
}