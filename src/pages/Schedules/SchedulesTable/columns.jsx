import React from 'react';
import { Tag } from 'antd';

export default [
  {
    title: 'Empresa',
    dataIndex: 'empresa',
    align: 'center',
  },
  {
    title: 'Linha',
    dataIndex: 'linha',
  },
  {
    title: 'Modalidade',
    dataIndex: 'modalidade',
    align: 'center',
  },
  {
    title: 'Hora',
    dataIndex: 'hora',
    align: 'center',
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
    title: 'Valor s/ Seguro',
    dataIndex: 'valorSemSeg',
    align: 'center',
  },
  {
    title: 'Valor c/ Seguro',
    dataIndex: 'valorComSeg',
    align: 'center',
  },
  {
    title: 'Distância',
    dataIndex: 'km',
    render: text => `${text}km`,
    align: 'center',
  },
  {
    title: 'Tempo Estimado',
    dataIndex: 'tempo',
    align: 'center',
  },
];
