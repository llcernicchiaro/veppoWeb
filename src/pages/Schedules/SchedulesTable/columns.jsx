import React from 'react';
import { Tag } from 'antd';

export default [
  {
    title: 'Empresa',
    dataIndex: 'empresa',
  },
  {
    title: 'Linha',
    dataIndex: 'linha',
  },
  {
    title: 'Modalidade',
    dataIndex: 'modalidade',
  },
  {
    title: 'Hora',
    dataIndex: 'hora',
  },
  {
    title: 'Frequência',
    dataIndex: 'freq',
    render: freq => (
      <span style={{ lineHeight: '30px' }}>
        {freq.length >= 7 ? (
          <Tag color="yellow" key="allday">
            TODOS OS DIAS
          </Tag>
        ) : (
          freq.map(tag => (
            <Tag color="geekblue" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))
        )}
      </span>
    ),
  },
  {
    title: 'Valor s/ Seg',
    dataIndex: 'valorSemSeg',
  },
  {
    title: 'Valor c/ Seg',
    dataIndex: 'valorComSeg',
  },
  {
    title: 'Km',
    dataIndex: 'km',
  },
  {
    title: 'Tempo Estimado',
    dataIndex: 'tempo',
  },
];
