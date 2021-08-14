import React, { Component } from "react";
//my components
import GithubCard from "./GithubCard";
//axios
import axios from "axios";

class GithubContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.userName,
      projects: [],
    };
  }

  componentDidMount() {
    // get this to work for final version
    //this.setState({user: this.props.userName})

    const github_LINK =
      "https://api.github.com/users/" + this.state.user + "/repos";
    axios.get(github_LINK).then((res) => {
      const projects = res.data;
      this.setState({ projects });
    });
  }
  render() {
    return (
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-0  px-2">
        {this.state.projects.map((project) => {
          return (
            <div className="Github-card">
              <GithubCard
                name={project.name}
                description={project.description}
                lastUpdated={project.updated_at}
                url={project.html_url}
                language={project.language}
                watchers={project.watchers_count}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default GithubContainer;
