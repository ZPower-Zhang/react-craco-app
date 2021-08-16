import * as React from 'react'
import { Card, Row, Col, Form, Input, Button, Table} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { getLotteryList } from '@/api/tenant'
import { asyncAwait } from '@/utils/util'

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
// const [form] = Form.useForm();

const tableColumns = [
  { title: '微信昵称', dataIndex: 'wxnickname' },
  { title: '手机号', dataIndex: 'phone' },
  { title: '抽奖名称', dataIndex: 'name' },
  { title: '是否开奖', dataIndex: 'address4' },
  { title: '是否中奖', dataIndex: 'address5' },
  { title: '中奖礼品', dataIndex: 'address6' },
  { title: '兑换状态', dataIndex: 'address7' },
  { title: '兑奖内容', dataIndex: 'address8' },
  { title: '抽奖时间', dataIndex: 'address9' },
  { title: '是否员工', dataIndex: 'address10' }
]
export default class Lottery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false,
      tableData: []
    }
  }
  
  formRef = React.createRef()

  onFinish = (values) => {
    console.log(values);
  }

  onHandleExpand = () => {
    this.setState({
      expand: !this.state.expand
    });
  }
  
  getData = async () => {
    const res = await asyncAwait(getLotteryList())
    console.info('res', res)
    if (res.code === '0') {
      this.setState({
        tableData: (res && res.data) || []
      })
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { tableData } = this.state
    return (
      <div className="page-container">
        <Card className="module-card">
          <Form {...formItemLayout} name="control-ref" onFinish={this.onFinish}>
            <Row>
              <Col flex="auto">
                <Row>
                  <Col span={8}>
                    <Form.Item name="note" label="微信昵称" rules={[{ required: false }]}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="note" label="抽奖时间" rules={[{ required: false }]}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="note" label="手机号" rules={[{ required: false }]}>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col flex="230px" className="right-btns">
                <span onClick={this.onHandleExpand}>
                  展开筛选{this.state.expand ? <UpOutlined /> : <DownOutlined />}
                </span>
                <Button type="primary">查询</Button>
                <Button>重置</Button>
              </Col>
            </Row>
          </Form>
        </Card>

        <div className="table-container">
          <Table columns={tableColumns} dataSource={tableData} />
        </div>
      </div>
    )
  }
}
