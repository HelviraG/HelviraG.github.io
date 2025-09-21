import { useEffect, useState } from "react";

export default function useDocumentTitle(title: string) {
    const [document_title] = useState(title);

    useEffect(() => {
        document.title = document_title; 
    },[document_title]);
}