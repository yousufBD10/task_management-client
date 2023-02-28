import { useEffect } from "react";

function useBackToTop() {
    useEffect(() => window.scroll({ top: 0, left: 0 }), [])
}

export default useBackToTop