import React from 'react';
import {Card} from '@material-ui/core';
import {styles} from './Style';

interface IRepositoryViewProps{
    repoinfo:any;
}

interface IRepositoryViewStates{

}

export class RepositoryView extends React.Component<IRepositoryViewProps,IRepositoryViewStates>{
// eslint-disable-next-line
    constructor(props:any){
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Card style={styles.searchUserCard}>
                    <div className="layout-column layout-align-space-between-start">
                        <span style={styles.repoName}>{this.props.repoinfo.name}</span>
                        <span style={styles.repoDesc}>{this.props.repoinfo.description}</span>

                    </div>
                </Card>
            </React.Fragment>
        )
    }
}

export default RepositoryView;
