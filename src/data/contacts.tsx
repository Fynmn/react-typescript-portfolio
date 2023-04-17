import { IContactCard } from "@/components/ContactCard";

import { FaGithub, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const contacts: IContactCard[] = [
    {
        icon: <FaGithub size={28} className="text-indigo-500 group-hover:text-white" />,
        label: "GitHub"
    },
    {
        icon: <FaInstagram size={28} className="text-indigo-500 group-hover:text-white" />,
        label: "Instagram"
    },
    {
        icon: <FaFacebookMessenger size={28} className="text-indigo-500 group-hover:text-white" />,
        label: "Messenger"
    },
    {
        icon: <HiOutlineMail size={28} className="text-indigo-500 group-hover:text-white" />,
        label: "Mail"
    },
]

export default contacts;

