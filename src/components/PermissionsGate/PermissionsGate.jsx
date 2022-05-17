import { cloneElement } from "react";
import { PERMISSIONS } from "./permission-map";
import { useGatRole } from "./useGetRole" // ver isto melhor

const hasPermission = ({ permissions, scopes}) => {
    const scopesMap = {};
    scopes.forEach((scope) => {
        scopesMap[scope] = true;
    });

    return permissions.some((permission) => scopesMap[permission]);
};

export default function PermissionsGate({
    children,
    scopes = []
}) {
    const { role } = useGetRole();
    const permissions = PERMISSIONS[role];

    const permissionGranted = hasPermission({ permissions, scope });

    if (!permissionGranted) {
        return <>You don't have the right permissions!</>;
    }
    
    return <>{children}</>
}

