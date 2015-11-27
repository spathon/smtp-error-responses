'use strict';

const console = require('console');
const DSN = require('./dsn');
const statuses = require('./statuses');


/**
 * Set up a welcome page
 *
 * @param  {Function} next   The done callback
 * @param  {Object}   server The express server
 * @return {json}            A json welcom text object
 */
exports.hook_init_http = function (next, server) {
  server.http.app.use('/', function(req, res, app_next) {
    res.json({
      h1: 'Email error responses',
      p: 'Send an email with the required error as user in the email address.'
    });
  });
};


/**
 * Accept all status emails
 *
 * @param  {Function} next   The done callback
 * @param  {Object}   conn   The connection
 * @param  {Array}   params  An array with the rcpt (why array when new for each?)
 * @return {void}
 */
exports.hook_rcpt = (next, conn, params) => {
  if(statuses[params[0].user]) return next(OK);
  next(DENY);
}


/**
 * Deny with the requested error responses
 *
 * @param  {Function} next    The next callback
 * @param  {Object}   conn    The connection
 * @param  {Address}  params  The rcpt Address object
 * @return {void}
 */
exports.hook_rcpt_ok = (next, conn, params) => {
  if(statuses[params.user]) {
    console.log('Return error: ', params.user);
    return next(DENY, DSN[params.user]());
  }
  next(DENY, 'Invalid user');
}


// hook_connect_init
// hook_lookup_rdns
// hook_connect
// hook_helo
// hook_ehlo
// hook_capabilities
// hook_mail
// hook_rcpt
// hook_rcpt_ok
// hook_data
// hook_post_data
// hook_data_post
// hook_queue
// hook_queue_outbound
// hook_queue_ok
// hook_quit
// hook_rset
// hook_helo
// hook_reset_transaction
// hook_disconnect
