import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import api, { TIME_SERIES } from 'api';

const initialData = {
	'Time Series (Daily)': {
		'2018-08-16': {
			'1. open': '108.3000',
			'2. high': '108.8600',
			'3. low': '107.3000',
			'4. close': '107.6400',
			'5. volume': '20687122',
		},
		'2018-08-15': {
			'1. open': '108.4900',
			'2. high': '108.9850',
			'3. low': '106.8200',
			'4. close': '107.6600',
			'5. volume': '29982806',
		},
		'2018-08-14': {
			'1. open': '108.5600',
			'2. high': '109.7500',
			'3. low': '108.0400',
			'4. close': '109.5600',
			'5. volume': '16788314',
		},
		'2018-08-13': {
			'1. open': '109.2400',
			'2. high': '109.5800',
			'3. low': '108.1000',
			'4. close': '108.2100',
			'5. volume': '18474884',
		},
		'2018-08-10': {
			'1. open': '109.4200',
			'2. high': '109.6900',
			'3. low': '108.3800',
			'4. close': '109.0000',
			'5. volume': '18183724',
		},
		'2018-08-09': {
			'1. open': '109.7100',
			'2. high': '110.1600',
			'3. low': '109.6000',
			'4. close': '109.6700',
			'5. volume': '13677211',
		},
		'2018-08-08': {
			'1. open': '109.3300',
			'2. high': '109.7500',
			'3. low': '108.7599',
			'4. close': '109.4900',
			'5. volume': '15487502',
		},
		'2018-08-07': {
			'1. open': '108.5600',
			'2. high': '109.1000',
			'3. low': '108.1700',
			'4. close': '108.8800',
			'5. volume': '16080214',
		},
		'2018-08-06': {
			'1. open': '108.1200',
			'2. high': '108.4200',
			'3. low': '107.5590',
			'4. close': '108.1300',
			'5. volume': '20265947',
		},
		'2018-08-03': {
			'1. open': '107.8000',
			'2. high': '108.0500',
			'3. low': '106.8200',
			'4. close': '108.0400',
			'5. volume': '18659599',
		},
		'2018-08-02': {
			'1. open': '105.4000',
			'2. high': '108.0900',
			'3. low': '104.8400',
			'4. close': '107.5700',
			'5. volume': '26104258',
		},
		'2018-08-01': {
			'1. open': '106.0300',
			'2. high': '106.4460',
			'3. low': '105.4200',
			'4. close': '106.2800',
			'5. volume': '23628699',
		},
		'2018-07-31': {
			'1. open': '106.4900',
			'2. high': '106.7200',
			'3. low': '105.3800',
			'4. close': '106.0800',
			'5. volume': '27655152',
		},
		'2018-07-30': {
			'1. open': '107.1900',
			'2. high': '107.5300',
			'3. low': '104.7600',
			'4. close': '105.3700',
			'5. volume': '34668327',
		},
		'2018-07-27': {
			'1. open': '110.1800',
			'2. high': '110.1800',
			'3. low': '106.1400',
			'4. close': '107.6800',
			'5. volume': '37005292',
		},
		'2018-07-26': {
			'1. open': '110.7400',
			'2. high': '111.0000',
			'3. low': '109.5000',
			'4. close': '109.6200',
			'5. volume': '31372110',
		},
		'2018-07-25': {
			'1. open': '107.9550',
			'2. high': '111.1500',
			'3. low': '107.6000',
			'4. close': '110.8300',
			'5. volume': '30798058',
		},
		'2018-07-24': {
			'1. open': '108.5700',
			'2. high': '108.8200',
			'3. low': '107.2600',
			'4. close': '107.6600',
			'5. volume': '26316619',
		},
		'2018-07-23': {
			'1. open': '106.3000',
			'2. high': '108.1400',
			'3. low': '106.1300',
			'4. close': '107.9700',
			'5. volume': '29706955',
		},
		'2018-07-20': {
			'1. open': '108.0800',
			'2. high': '108.2000',
			'3. low': '106.0800',
			'4. close': '106.2700',
			'5. volume': '56038827',
		},
		'2018-07-19': {
			'1. open': '104.9300',
			'2. high': '105.3100',
			'3. low': '103.8900',
			'4. close': '104.4000',
			'5. volume': '40171646',
		},
		'2018-07-18': {
			'1. open': '105.9400',
			'2. high': '106.0500',
			'3. low': '104.7150',
			'4. close': '105.1200',
			'5. volume': '29493927',
		},
		'2018-07-17': {
			'1. open': '104.6100',
			'2. high': '106.5000',
			'3. low': '104.3200',
			'4. close': '105.9500',
			'5. volume': '25901726',
		},
		'2018-07-16': {
			'1. open': '105.4000',
			'2. high': '105.8200',
			'3. low': '104.5150',
			'4. close': '104.9100',
			'5. volume': '21786912',
		},
		'2018-07-13': {
			'1. open': '104.3700',
			'2. high': '105.6000',
			'3. low': '104.0900',
			'4. close': '105.4300',
			'5. volume': '24653500',
		},
		'2018-07-12': {
			'1. open': '102.7700',
			'2. high': '104.4100',
			'3. low': '102.7300',
			'4. close': '104.1900',
			'5. volume': '24335929',
		},
		'2018-07-11': {
			'1. open': '101.1500',
			'2. high': '102.3400',
			'3. low': '101.1000',
			'4. close': '101.9800',
			'5. volume': '19644648',
		},
		'2018-07-10': {
			'1. open': '102.0000',
			'2. high': '102.5100',
			'3. low': '101.8600',
			'4. close': '102.1200',
			'5. volume': '19293140',
		},
		'2018-07-09': {
			'1. open': '101.6452',
			'2. high': '102.2500',
			'3. low': '101.2510',
			'4. close': '101.8500',
			'5. volume': '18211980',
		},
		'2018-07-06': {
			'1. open': '99.8850',
			'2. high': '101.4300',
			'3. low': '99.6700',
			'4. close': '101.1600',
			'5. volume': '19234627',
		},
		'2018-07-05': {
			'1. open': '99.5000',
			'2. high': '99.9200',
			'3. low': '99.0299',
			'4. close': '99.7600',
			'5. volume': '18977402',
		},
		'2018-07-03': {
			'1. open': '100.4800',
			'2. high': '100.6300',
			'3. low': '98.9400',
			'4. close': '99.0500',
			'5. volume': '14670275',
		},
		'2018-07-02': {
			'1. open': '98.1000',
			'2. high': '100.0600',
			'3. low': '98.0000',
			'4. close': '100.0100',
			'5. volume': '19564521',
		},
		'2018-06-29': {
			'1. open': '98.9300',
			'2. high': '99.9100',
			'3. low': '98.3300',
			'4. close': '98.6100',
			'5. volume': '28053214',
		},
		'2018-06-28': {
			'1. open': '97.3800',
			'2. high': '99.1100',
			'3. low': '97.2600',
			'4. close': '98.6300',
			'5. volume': '26650671',
		},
		'2018-06-27': {
			'1. open': '99.5800',
			'2. high': '100.0200',
			'3. low': '97.4000',
			'4. close': '97.5400',
			'5. volume': '31298386',
		},
		'2018-06-26': {
			'1. open': '98.8200',
			'2. high': '100.0800',
			'3. low': '98.7500',
			'4. close': '99.0800',
			'5. volume': '26897244',
		},
		'2018-06-25': {
			'1. open': '100.0000',
			'2. high': '100.1100',
			'3. low': '97.3000',
			'4. close': '98.3900',
			'5. volume': '35433333',
		},
		'2018-06-22': {
			'1. open': '100.4100',
			'2. high': '100.7700',
			'3. low': '99.6250',
			'4. close': '100.4100',
			'5. volume': '38923105',
		},
		'2018-06-21': {
			'1. open': '102.0750',
			'2. high': '102.4600',
			'3. low': '100.8800',
			'4. close': '101.1400',
			'5. volume': '23198188',
		},
		'2018-06-20': {
			'1. open': '101.3700',
			'2. high': '102.5200',
			'3. low': '101.1200',
			'4. close': '101.8700',
			'5. volume': '26180792',
		},
		'2018-06-19': {
			'1. open': '99.6500',
			'2. high': '101.0000',
			'3. low': '99.5000',
			'4. close': '100.8600',
			'5. volume': '28653087',
		},
		'2018-06-18': {
			'1. open': '100.0100',
			'2. high': '101.1100',
			'3. low': '99.4200',
			'4. close': '100.8600',
			'5. volume': '23586037',
		},
		'2018-06-15': {
			'1. open': '101.5100',
			'2. high': '101.5300',
			'3. low': '100.0700',
			'4. close': '100.1300',
			'5. volume': '65738585',
		},
		'2018-06-14': {
			'1. open': '101.6500',
			'2. high': '102.0300',
			'3. low': '101.0000',
			'4. close': '101.4200',
			'5. volume': '25691811',
		},
		'2018-06-13': {
			'1. open': '101.7200',
			'2. high': '102.0100',
			'3. low': '100.5600',
			'4. close': '100.8500',
			'5. volume': '29492875',
		},
		'2018-06-12': {
			'1. open': '101.1000',
			'2. high': '101.4493',
			'3. low': '100.7500',
			'4. close': '101.3100',
			'5. volume': '18325228',
		},
		'2018-06-11': {
			'1. open': '101.3700',
			'2. high': '101.5900',
			'3. low': '100.6700',
			'4. close': '101.0500',
			'5. volume': '23490894',
		},
		'2018-06-08': {
			'1. open': '101.0924',
			'2. high': '101.9500',
			'3. low': '100.5400',
			'4. close': '101.6300',
			'5. volume': '22165128',
		},
		'2018-06-07': {
			'1. open': '102.6500',
			'2. high': '102.6900',
			'3. low': '100.3800',
			'4. close': '100.8800',
			'5. volume': '28232197',
		},
		'2018-06-06': {
			'1. open': '102.4800',
			'2. high': '102.6000',
			'3. low': '101.9000',
			'4. close': '102.4900',
			'5. volume': '21122917',
		},
		'2018-06-05': {
			'1. open': '102.0000',
			'2. high': '102.3300',
			'3. low': '101.5300',
			'4. close': '102.1900',
			'5. volume': '23514402',
		},
		'2018-06-04': {
			'1. open': '101.2600',
			'2. high': '101.8600',
			'3. low': '100.8510',
			'4. close': '101.6700',
			'5. volume': '27281623',
		},
		'2018-06-01': {
			'1. open': '99.2798',
			'2. high': '100.8600',
			'3. low': '99.1700',
			'4. close': '100.7900',
			'5. volume': '28655624',
		},
		'2018-05-31': {
			'1. open': '99.2900',
			'2. high': '99.9900',
			'3. low': '98.6100',
			'4. close': '98.8400',
			'5. volume': '34140891',
		},
		'2018-05-30': {
			'1. open': '98.3100',
			'2. high': '99.2500',
			'3. low': '97.9100',
			'4. close': '98.9500',
			'5. volume': '22158528',
		},
		'2018-05-29': {
			'1. open': '97.8400',
			'2. high': '98.8800',
			'3. low': '97.2300',
			'4. close': '98.0100',
			'5. volume': '28670981',
		},
		'2018-05-25': {
			'1. open': '98.3000',
			'2. high': '98.9800',
			'3. low': '97.8600',
			'4. close': '98.3600',
			'5. volume': '18363918',
		},
		'2018-05-24': {
			'1. open': '98.7250',
			'2. high': '98.9400',
			'3. low': '96.8100',
			'4. close': '98.3100',
			'5. volume': '26649287',
		},
		'2018-05-23': {
			'1. open': '96.7100',
			'2. high': '98.7300',
			'3. low': '96.3200',
			'4. close': '98.6600',
			'5. volume': '21251222',
		},
		'2018-05-22': {
			'1. open': '97.6800',
			'2. high': '98.1700',
			'3. low': '97.2000',
			'4. close': '97.5000',
			'5. volume': '15441189',
		},
		'2018-05-21': {
			'1. open': '97.0000',
			'2. high': '98.0100',
			'3. low': '96.8000',
			'4. close': '97.6000',
			'5. volume': '19422467',
		},
		'2018-05-18': {
			'1. open': '96.0100',
			'2. high': '96.9300',
			'3. low': '96.0100',
			'4. close': '96.3600',
			'5. volume': '17865840',
		},
		'2018-05-17': {
			'1. open': '96.7600',
			'2. high': '97.5401',
			'3. low': '95.8300',
			'4. close': '96.1800',
			'5. volume': '17246716',
		},
		'2018-05-16': {
			'1. open': '97.3600',
			'2. high': '97.4000',
			'3. low': '96.6150',
			'4. close': '97.1500',
			'5. volume': '17384742',
		},
		'2018-05-15': {
			'1. open': '97.2400',
			'2. high': '97.8500',
			'3. low': '96.3400',
			'4. close': '97.3200',
			'5. volume': '24594010',
		},
		'2018-05-14': {
			'1. open': '97.9200',
			'2. high': '98.6900',
			'3. low': '97.3100',
			'4. close': '98.0300',
			'5. volume': '19454124',
		},
		'2018-05-11': {
			'1. open': '97.8000',
			'2. high': '97.8700',
			'3. low': '97.0400',
			'4. close': '97.7000',
			'5. volume': '16778316',
		},
		'2018-05-10': {
			'1. open': '97.4600',
			'2. high': '97.9500',
			'3. low': '97.0500',
			'4. close': '97.9100',
			'5. volume': '22388119',
		},
		'2018-05-09': {
			'1. open': '96.0100',
			'2. high': '96.9700',
			'3. low': '95.0500',
			'4. close': '96.9400',
			'5. volume': '27327410',
		},
		'2018-05-08': {
			'1. open': '95.8456',
			'2. high': '96.1600',
			'3. low': '95.0631',
			'4. close': '95.8100',
			'5. volume': '23484589',
		},
		'2018-05-07': {
			'1. open': '95.1700',
			'2. high': '96.7100',
			'3. low': '95.1000',
			'4. close': '96.2200',
			'5. volume': '24242019',
		},
		'2018-05-04': {
			'1. open': '93.3200',
			'2. high': '95.3700',
			'3. low': '92.9200',
			'4. close': '95.1600',
			'5. volume': '22531325',
		},
		'2018-05-03': {
			'1. open': '92.9600',
			'2. high': '94.9250',
			'3. low': '92.4500',
			'4. close': '94.0700',
			'5. volume': '31142497',
		},
		'2018-05-02': {
			'1. open': '94.9900',
			'2. high': '95.1700',
			'3. low': '93.1900',
			'4. close': '93.5100',
			'5. volume': '27471002',
		},
		'2018-05-01': {
			'1. open': '93.2100',
			'2. high': '95.2900',
			'3. low': '92.7900',
			'4. close': '95.0000',
			'5. volume': '31408927',
		},
		'2018-04-30': {
			'1. open': '96.3300',
			'2. high': '96.3964',
			'3. low': '93.1500',
			'4. close': '93.5200',
			'5. volume': '41523605',
		},
		'2018-04-27': {
			'1. open': '97.6000',
			'2. high': '97.9000',
			'3. low': '93.9100',
			'4. close': '95.8200',
			'5. volume': '48272780',
		},
		'2018-04-26': {
			'1. open': '93.5500',
			'2. high': '95.1500',
			'3. low': '93.1000',
			'4. close': '94.2600',
			'5. volume': '42529043',
		},
		'2018-04-25': {
			'1. open': '93.3000',
			'2. high': '93.3000',
			'3. low': '90.2800',
			'4. close': '92.3100',
			'5. volume': '33729257',
		},
		'2018-04-24': {
			'1. open': '96.2420',
			'2. high': '96.4700',
			'3. low': '92.4100',
			'4. close': '93.1200',
			'5. volume': '34524799',
		},
		'2018-04-23': {
			'1. open': '95.7436',
			'2. high': '96.2900',
			'3. low': '94.6300',
			'4. close': '95.3500',
			'5. volume': '22331829',
		},
		'2018-04-20': {
			'1. open': '95.9100',
			'2. high': '96.1100',
			'3. low': '94.0500',
			'4. close': '95.0000',
			'5. volume': '31154377',
		},
		'2018-04-19': {
			'1. open': '96.4400',
			'2. high': '97.0700',
			'3. low': '95.3400',
			'4. close': '96.1100',
			'5. volume': '23552541',
		},
		'2018-04-18': {
			'1. open': '96.2200',
			'2. high': '96.7200',
			'3. low': '95.5200',
			'4. close': '96.4400',
			'5. volume': '21043287',
		},
		'2018-04-17': {
			'1. open': '95.0000',
			'2. high': '96.5400',
			'3. low': '94.8800',
			'4. close': '96.0700',
			'5. volume': '26771000',
		},
		'2018-04-16': {
			'1. open': '94.0700',
			'2. high': '94.6600',
			'3. low': '93.4200',
			'4. close': '94.1700',
			'5. volume': '20288083',
		},
		'2018-04-13': {
			'1. open': '94.0500',
			'2. high': '94.1800',
			'3. low': '92.4400',
			'4. close': '93.0800',
			'5. volume': '23346063',
		},
		'2018-04-12': {
			'1. open': '92.4300',
			'2. high': '94.1600',
			'3. low': '92.4300',
			'4. close': '93.5800',
			'5. volume': '26758879',
		},
		'2018-04-11': {
			'1. open': '92.0100',
			'2. high': '93.2900',
			'3. low': '91.4800',
			'4. close': '91.8600',
			'5. volume': '24872110',
		},
		'2018-04-10': {
			'1. open': '92.3900',
			'2. high': '93.2800',
			'3. low': '91.6400',
			'4. close': '92.8800',
			'5. volume': '26939883',
		},
		'2018-04-09': {
			'1. open': '91.0400',
			'2. high': '93.1700',
			'3. low': '90.6200',
			'4. close': '90.7700',
			'5. volume': '31533943',
		},
		'2018-04-06': {
			'1. open': '91.4900',
			'2. high': '92.4600',
			'3. low': '89.4800',
			'4. close': '90.2300',
			'5. volume': '38026000',
		},
		'2018-04-05': {
			'1. open': '92.4350',
			'2. high': '93.0650',
			'3. low': '91.4000',
			'4. close': '92.3800',
			'5. volume': '29771881',
		},
		'2018-04-04': {
			'1. open': '87.8500',
			'2. high': '92.7600',
			'3. low': '87.7300',
			'4. close': '92.3300',
			'5. volume': '35559956',
		},
		'2018-04-03': {
			'1. open': '89.5750',
			'2. high': '90.0500',
			'3. low': '87.8900',
			'4. close': '89.7100',
			'5. volume': '37213837',
		},
		'2018-04-02': {
			'1. open': '90.4700',
			'2. high': '90.8800',
			'3. low': '87.5100',
			'4. close': '88.5200',
			'5. volume': '48515417',
		},
		'2018-03-29': {
			'1. open': '90.1800',
			'2. high': '92.2900',
			'3. low': '88.4000',
			'4. close': '91.2700',
			'5. volume': '45867548',
		},
		'2018-03-28': {
			'1. open': '89.8200',
			'2. high': '91.2300',
			'3. low': '88.8730',
			'4. close': '89.3900',
			'5. volume': '52501146',
		},
		'2018-03-27': {
			'1. open': '94.9400',
			'2. high': '95.1390',
			'3. low': '88.5100',
			'4. close': '89.4700',
			'5. volume': '53704562',
		},
	},
};

class PageHome extends React.PureComponent {
	// console.log("page home -> ", this.props.match.params.stockSymbol);
	constructor(props) {
		super(props);
		this.graph = React.createRef();
		this.canvasBox = React.createRef();
		this.stockCodes = [
			'MSFT',
			'AAPL',
			'INTC',
			'NFLX',
			'ORCL',
			'CMCSA',
			'GOOG',
			'LUV',
			'HOG',
			'GOOGL',
			'AMZN',
		];
		this.state = {
			data: null,
			requestError: null,
			networkError: null,
			response: initialData,
		};
		this.__fetchChartData = this.__fetchChartData.bind(this);
	}

	componentDidMount() {
		this.__fetchChartData();
		this.__visualizeData();
	}

	__clickStockSymbol = (stockSymbol) => async () => {
		console.log('stockSymbol: ', stockSymbol);
		this.__fetchChartData(stockSymbol);
	};

	async __fetchChartData(chartSymbol) {
		const stockSymbol = chartSymbol || this.props.match.params.stockSymbol;
		if (stockSymbol) {
			try {
				const result = await api.getStockTimeSeries(
					TIME_SERIES.TIME_SERIES_DAILY,
					this.props.match.params.stockSymbol,
				);
				console.log(result);
				const TIME_SERIES_DAILY = 'Time Series (Daily)';
				if (result.statusText === 'OK' || result.status === 200) {
					if (result.data[TIME_SERIES_DAILY]) {
						this.setState(
							{
								response: {
									[TIME_SERIES_DAILY]: result.data[TIME_SERIES_DAILY],
								},
							},
							() => {
								this.__visualizeData();
							},
						);
					} else {
						alert(result.data['Information']);
					}
				} else {
					this.setState({ requestError: result.data.error });
				}
			} catch (error) {
				console.log(error);
				this.setState({ networkError: error });
			}
		}
	}

	__visualizeData = () => {
		const highKey = '2. high';
		const lowKey = '3. low';

		const { response } = this.state;
		const chartTitle = this.props.match.params.stockSymbol || null;
		const items = response['Time Series (Daily)'];
		const itemsCount = Object.keys(items).length;
		let maxHigh,
			minLow = 0;

		for (const key in items) {
			if (
				(minLow !== 0 && minLow > Number(items[key][lowKey])) ||
				minLow === 0
			) {
				minLow = Number(items[key][lowKey]);
			}
			if (!maxHigh) {
				maxHigh = Number(items[key][highKey]);
			} else {
				if (maxHigh < Number(items[key][highKey])) {
					maxHigh = Number(items[key][highKey]);
				}
			}
		}
		console.log('minLow, ', minLow);
		minLow = Math.floor(minLow);
		console.log('minLow ', minLow);
		maxHigh = Math.ceil(maxHigh);
		// console.log('maxHigh -> ', maxHigh);

		const yLength = maxHigh - minLow;
		const graph = this.graph.current;
		const ctx = graph.getContext('2d');
		ctx.font = '20px Arial';

		graph.width = graph.scrollWidth;
		graph.height = graph.scrollHeight;

		const widthcv = graph.width;
		const heightcv = graph.height;

		const offsetX = widthcv * 0.06; //50
		const offsetY = heightcv * 0.06; //50

		if (chartTitle) {
			ctx.fillText(this.props.match.params.stockSymbol, widthcv / 2, 10);
		}

		/* helper */
		const revertHeight = (height) => {
			return heightcv - height;
		};

		const drawLine = (x1, y1, x2, y2, color, lineWidth) => {
			ctx.beginPath();
			ctx.lineWidth = lineWidth || 0.3;
			ctx.strokeStyle = color || '#ccc';
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
			ctx.closePath();
		};

		const drawText = (text, x1, y1) => {
			ctx.fillText(text, x1, y1);
		};

		// const pixelConverter = (n) => {
		// 	return (n / maxHigh) * (heightcv - offsetY * 2);
		// };

		const pixelConverter = (n) => {
			// console.log('yLength ', yLength);
			return (n * (heightcv - offsetY * 2)) / yLength;
		};

		const textAdjust = (text) => {
			// console.log(text.toString().length * 3);
			return text.toString().length * 5; // 3px
		};

		// const steps = Math.round(maxHigh / 5);
		const steps = Math.round(yLength / 5);
		// const stepsNumber = (maxHigh - minLow) / steps;

		console.log(Math.round(maxHigh / 5) + ', ' + Math.round(yLength / 5));

		const pixelPerStepForY = (heightcv - offsetY * 2) / steps;
		const pixelPerStepForX = (widthcv - offsetX * 2) / itemsCount;

		const drawChartData = (data, x1) => {
			const item = items[data];
			let y1, y2;
			const high = Number(item['2. high']);

			const low = Number(item['3. low']);
			const open = Number(item['1. open']);
			const close = Number(item['4. close']);
			console.log('or high: ', high, low);
			console.log(pixelConverter(high));
			const highPx = revertHeight(pixelConverter(high) + offsetY);
			const lowPx = revertHeight(pixelConverter(low) + offsetY);
			const openPx = revertHeight(pixelConverter(open) + offsetY);
			const closePx = revertHeight(pixelConverter(close) + offsetY);

			let color = '#39b54a';
			if (close < open) {
				color = '#ed454a';
			}
			drawLine(x1, lowPx, x1, highPx, color, 1);
			drawLine(x1 - 2, openPx, x1, openPx, color, 1);
			drawLine(x1, closePx, x1 + 2, closePx, color, 1);
		};

		// console.log(pixelConverter(50) + ' px');

		drawLine(
			offsetX,
			revertHeight(offsetY),
			offsetX,
			revertHeight(heightcv - offsetY),
		);

		drawLine(
			offsetX,
			revertHeight(offsetY),
			widthcv - offsetX,
			revertHeight(offsetY),
		);

		for (let i = 0; i < steps; i++) {
			drawLine(
				offsetX - 4,
				revertHeight(i * pixelPerStepForY + offsetY),
				offsetX,
				revertHeight(i * pixelPerStepForY + offsetY),
			);

			drawText(
				`$${minLow + i * 5}`,
				offsetX - 10 - textAdjust(`$${minLow + i * 5}`),
				revertHeight(i * pixelPerStepForY + offsetY),
			);
		}

		Object.keys(items).map((item, index) => {
			const date = new Date(item).getDate();
			if (date === 1) {
				drawLine(
					offsetX + (index + 1) * pixelPerStepForX,
					revertHeight(offsetY),
					offsetX + (index + 1) * pixelPerStepForX,
					revertHeight(offsetY) + 4,
				);
			}
			drawChartData(item, offsetX + (index + 1) * pixelPerStepForX);
		});
	};

	render() {
		if (Object.keys(this.state.response['Time Series (Daily)']).length > 0) {
			return (
				<section className={'pagehome'}>
					<div className={'pagehome-body'}>
						<div className="tile is-ancestor">
							<div className="tile is-4 is-vertical is-parent">
								<div className="tile is-child box">
									<aside className="menu">
										<p className="menu-label">Stock Symbol</p>
										<ul className="menu-list">
											{this.stockCodes.map((item, index) => (
												<li
													key={index}
													className={
														item === this.props.match.params.stockSymbol
															? 'active'
															: null
													}>
													<Link
														to={`/${item}`}
														onClick={this.__clickStockSymbol(item)}>
														{item}
													</Link>
												</li>
											))}
										</ul>
									</aside>
								</div>
							</div>
							<div className="tile is-parent">
								<div
									ref={this.canvasBox}
									id="canvas-box"
									className="tile is-child box">
									<canvas ref={this.graph} id="ohlcvis" />
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		}
		return null;
	}
}

export default PageHome;
