import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - ArtSnap`
    }, [title])
};
export default useTitle;