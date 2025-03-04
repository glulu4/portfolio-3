import clsx from "clsx";
import {Skill} from "../../public/projects";

interface WorkRowProps {
    title: string;
    skills: Skill[];
    category: string;
}

const WorkRow = ({title, skills, category}: WorkRowProps) => {
    return (
        <div className=
            {clsx("hover:scale-95 transition-transform duration-300 transform-gpu overflow-visible",
        "flex w-full items-center justify-between py-4 border-b border-gray-700 overflow-x-visible ")}
        >
            <h2 className="text-textTert text-xl sm:text-3xl font-bold flex-1 text-left">
                {title}
            </h2>
            <p className="hidden lg:block text-sm sm:text-lg lg:text-xl text-gray-400 flex-1 text-center">
                {skills.join(" / ")}
            </p>
            <div className="flex-1 text-right">
                <span className="text-lg text-textTert sm:text-3xl ">{category}</span>
            </div>
        </div>
    );
};


export default WorkRow;