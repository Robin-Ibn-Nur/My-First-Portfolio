import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


export function DrawerForm() {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <Button variant="gradient"
                size="sm"
                className="hidden lg:inline-block" onClick={openDrawer}>
                <span>Contact Information</span>
            </Button>
            <Drawer open={open} onClose={closeDrawer}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h6" color="blue-gray">
                        Email : md.robin04101997@gmail.com
                        Mobile: +880 1688 422 413
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
            </Drawer>
        </>
    );
}