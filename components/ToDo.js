import { Typography , Box , Checkbox} from "@mui/material";

export default function ToDo({value , title}){
    // value ? console.log(true) : console.log(false)
    return(
        <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            width:'65%',
            margin:'0 auto'
        }}>
            <Typography>{title}</Typography>
            <Checkbox checked={value ? "" : "checked"}/>
        </Box>
    )
}