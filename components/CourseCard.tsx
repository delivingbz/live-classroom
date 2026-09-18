
import Link from "next/link";

type courseCardProps ={

    title : string;
    description : string;
    level : string;
    id : number;

};

export default function courseCard({title, description, level, id}: courseCardProps){
    return(
        <article className="rounded-xl border bg-white p-5 transition hover: shadow-lg">
            <span className="text-sm font-medium text-gray-500">
                {level}
            </span>
            <h3 className="mt-2 text-xl font-semibold">
                {title}
            </h3>
            <p className="mt-2 text-gray-600">
                {description}
            </p>
            <Link href={`/courses/${id}`} className="mt-5 rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800"
            >
                
                    view courses
              
            </Link>

        </article>
    )
}