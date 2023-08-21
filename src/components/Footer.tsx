import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className='bg-dark'>
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <ul className="list-unstyled quick-links d-flex justify-content-center ">
              <li><a className='text-white me-4 fs-3 px-3' href="javascript:void();">Home</a></li>
              <li><a className='text-white me-4 fs-3 px-3' href="javascript:void();">About</a></li>
              <li><a className='text-white me-4 fs-3 px-3' href="javascript:void();">FAQ</a></li>
              <li><a className='text-white me-4 fs-3 px-3' href="javascript:void();">Get Started</a></li>
              <li><a className='text-white me-4 fs-3 px-3 gx-3' href="javascript:void();">Videos</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item fs-4"><a className='text-white' href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item fs-4"><a className='text-white' href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inlinelll-item fs-4"><a className='text-white' href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item fs-4"><a className='text-white' href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p><u><a className='text-white' href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
            <p className="h6">&copy; All rights reserved. <a className="text-white" href="#" target="_blank">Pawsconnect</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
