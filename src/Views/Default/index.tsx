import React from 'react';
import { IRootState } from '../../store';
import { connect, ConnectedProps } from 'react-redux';
import AddProjectInfo from './AddProjectInfo';
import { useParams } from 'react-router-dom';
import Main from '../Main';

const mapStateToProps = ({ projects }: IRootState) => ({ projects });
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Index: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { projectId }: { projectId: string } = useParams();
  if (projectId) return <Main projectId={projectId} />
  return <>{props.projects.projects.length > 0 ? <div>Projects detected</div> : <AddProjectInfo />}</>;
};

export default connector(Index);
