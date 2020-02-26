import React from 'react';
import { Button } from 'antd';

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
    title: 'Assentos',
    dataIndex: 'assentos',
    align: 'center',
  },
  {
    title: 'Valores',
    children: [
      {
        title: 'Sem Seguro',
        dataIndex: 'valorSemSeg',
        align: 'center',
      },
      {
        title: 'Com Seguro',
        dataIndex: 'valorComSeg',
        align: 'center',
      },
      {
        title: 'Valor Promocional',
        dataIndex: 'valorComSeg',
        align: 'center',
      },
    ],
  },
  {
    title: 'Tempo Estimado',
    dataIndex: 'tempo',
    align: 'center',
  },
  {
    title: '',
    render: () => <Button type="primary">Comprar</Button>,
  },
];
