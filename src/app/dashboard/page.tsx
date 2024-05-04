import { Button } from "@/components/ui/button";
import { logout } from "../actions/auth";

export default function Dashboard() {
    return (
        <>
            <p>DASHBOARD</p>
            <form action={logout}>
                <Button type="submit">LOGOUT</Button>
            </form>
        </>
    )
}