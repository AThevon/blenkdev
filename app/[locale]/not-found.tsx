import { Params } from "@/types/params";

export const NotFound = ({ params: { lang } }: Params) => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
        </div>
    );
};

export default NotFound;