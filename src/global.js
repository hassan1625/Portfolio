import { useEffect } from 'react'

export default function globalJs(){
    useEffect(() => {
        AOS.init({duration:1000});
    })
}