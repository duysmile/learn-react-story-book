import React from 'react';
import { Table, Space } from 'antd';

const { Column, ColumnGroup } = Table;

class ListBook extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <Table dataSource={items}>
                <ColumnGroup title="Title" dataIndex="title" key="title" />
                <Column title="Description" dataIndex="description" key="description" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Edit</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>
        );
    }
}

export default ListBook;
