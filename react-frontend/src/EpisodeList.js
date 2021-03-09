import { Card, Col, Row } from "antd";
import episodeApi from "EpisodeApi";
import { Component } from "react";
class EpisodeDetail extends Component {
  state = {
    episode: this.props.episode,
  };

  render() {
    const {
      episode: {
        //  id,
        name,
        image,
      },
    } = this.state;
    const { medium: thumbUrl } = image;
    return (
      <Card style={{ width: 240 }} cover={<img src={thumbUrl} alt={name} />}>
        <Card.Meta title={name} />
      </Card>
    );
  }
}
class EpisodeList extends Component {
  state = {
    episodeList: [],
  };
  async componentDidMount() {
    const apiUrl = "/singlesearch/shows";
    const params = {
      q: "rm-root",
      embed: "episodes",
    };
    try {
      const { data } = await episodeApi.get(apiUrl, { params });
      const {
        _embedded: { episodes },
      } = data;
      this.setState({
        episodeList: episodes,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { episodeList } = this.state;
    return (
      <div>
        <h1>EpisodeList</h1>
        <Row>
          {episodeList.map((episode) => (
            <Col span={8} key={episode.id}>
              <EpisodeDetail episode={episode} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default EpisodeList;
