import { styled } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        padding: 20,
        color: '#fff',
        borderRadius: 10,
        backgroundColor: '#fff',
        border: '1px solid #0A70B1',
        fontSize: theme.typography.pxToRem(12),
    },
}));

export default CustomTooltip;