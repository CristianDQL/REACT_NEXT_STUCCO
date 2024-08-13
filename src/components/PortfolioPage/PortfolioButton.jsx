'use client'
import { useRouter } from 'next/navigation';

export default function PortfolioButton({id}){
    const router = useRouter()
    function handleClick(){
        router.push(`/portfolio/${id}`)
    }

    return (
        <button style={{cursor: 'pointer'}} onClick={handleClick}>
            Visit
        </button>
    )
}
