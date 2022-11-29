import {Fragment} from "react";

export default function Logo({negara}) {
    return (
        <Fragment>
            <img src={'https://api.fifa.com/api/v3/picture/flags-sq-3/' + negara}
                 className='rounded img-fluid rounded-3 mx-auto w-75 border'
                 alt={negara}
            />
        </Fragment>
    )
}
