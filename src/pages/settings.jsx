import { useParams } from "react-router";

export default function SettingsPage() {
    const { v } = useParams();


    return (
        <div className="flex w-auto flex-col items-center">
            <div className="flex-container">Settings</div>
        </div>
    );
}