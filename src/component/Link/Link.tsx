import React from "react";
import { Link as RemixLink, LinkProps as RemixLinkProps } from "@remix-run/react";
import { AnchorProps, Box } from "@mantine/core";
import { mergeSx } from "@encode42/mantine-extras";

/**
 * Options for the {@link Link} component.
 */
export interface LinkProps extends RemixLinkProps {
    /**
     * Mantine UI's component styling API.
     */
    "sx"?: AnchorProps["sx"]
}

/**
 * A Remix [Link](https://remix.run/docs/en/v1/api/remix#link) wrapped with a [Box](https://mantine.dev/core/box).
 *
 * @remarks
 * Used for components that link elsewhere within the site, but shouldn't be styled.
 */
export function Link({ className, sx, prefetch = "intent", ...other }: LinkProps) {
    return (
        <Box className={className} sx={mergeSx({
            "*": {
                "textDecoration": "none"
            }
        }, sx)}>
            <RemixLink prefetch={prefetch} {...other} />
        </Box>
    );
}
