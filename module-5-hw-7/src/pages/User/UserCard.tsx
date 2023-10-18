import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material"
import {FC, ReactElement} from "react";
import {IUser} from "../../interfaces/users";

const UserCard: FC<IUser> = (props): ReactElement => {
     return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                    component="img"
                    height="250"
                    image={props.avatar}
                    alt={props.email}
                />
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {props.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.first_name} {props.last_name}
                    </Typography>
                </CardContent>
        </Card>
    )
}

export default UserCard