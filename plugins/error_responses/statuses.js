
module.exports = {
  // Class: Other or Undefined Status X.0.0
  unspecified: { code: 450, haraka: 'X.0.0', text: 'Other undefined status' },
  // Class: Addressing Status X.1.X
  addr_unspecified: { code: 450, haraka: 'X.1.0', text: 'Other address status' },
  addr_bad_dest_mailbox: { code: 550, haraka: 'X.1.1', text: 'Bad destination mailbox address' },
  addr_bad_dest_system: { code: 550, haraka: 'X.1.2', text: 'Bad destination system address' },
  addr_bad_dest_syntax: { code: 550, haraka: 'X.1.3', text: 'Bad destination mailbox address syntax' },
  addr_dest_ambigous: { code: 450, haraka: 'X.1.4', text: 'Destination mailbox address ambiguous' },
  addr_rcpt_ok: { code: 220, haraka: 'X.1.5', text: 'Destination address valid' },
  addr_mbox_mobed: { code: 550, haraka: 'X.1.6', text: 'Destination mailbox has moved, No forwarding address' },
  addr_bad_from_syntax: { code: 550, haraka: 'X.1.7', text: 'Bad sender"s mailbox address syntax' },
  addr_bad_from_system: { code: 550, haraka: 'X.1.8', text: 'Bad sender"s system address' },
  // Class: Mailbox Status X.2.X
  mbox_unspecified: { code: 450, haraka: 'X.2.0', text: 'Other or undefined mailbox status' },
  mbox_disabled: { code: 550, haraka: 'X.2.1', text: 'Mailbox disabled, not accepting messages' },
  mbox_full: { code: 450, haraka: 'X.2.2', text: 'Mailbox full' },
  mbox_msg_too_long: { code: 550, haraka: 'X.2.3', text: 'Message length exceeds administrative limit' },
  mbox_list_expansion_problem: { code: 450, haraka: 'X.2.4', text: 'Mailing list expansion problem' },
  // Class: Mail System Status X.3.X
  sys_unspecified: { code: 450, haraka: 'X.3.0', text: 'Other or undefined mail system status' },
  sys_disk_full: { code: 450, haraka: 'X.3.1', text: 'Mail system full' },
  sys_not_accepting_mail: { code: 450, haraka: 'X.3.2', text: 'System not accepting network messages' },
  sys_not_supported: { code: 450, haraka: 'X.3.3', text: 'System not capable of selected features' },
  sys_msg_too_big: { code: 550, haraka: 'X.3.4', text: 'Message too big for system' },
  sys_incorrectly_configured: { code: 450, haraka: 'X.3.5', text: 'System incorrectly configured' },
  // Class: Network and Routing Status X.4.X
  net_unspecified: { code: 450, haraka: 'X.4.0', text: 'Other or undefined network or routing status' },
  net_no_answer: { code: 450, haraka: 'X.4.1', text: 'No answer from host' },
  net_bad_connection: { code: 450, haraka: 'X.4.2', text: 'Bad connection' },
  net_directory_server_failed: { code: 450, haraka: 'X.4.3', text: 'Directory server failure' },
  net_unable_to_route: { code: 550, haraka: 'X.4.4', text: 'Unable to route' },
  net_system_congested: { code: 450, haraka: 'X.4.5', text: 'Mail system congestion' },
  net_routing_loop: { code: 550, haraka: 'X.4.6', text: 'Routing loop detected' },
  net_delivery_time_expired: { code: 550, haraka: 'X.4.7', text: 'Delivery time expired' },
  // Class: Mail Delivery Protocol Status X.5.X
  proto_unspecified: { code: 450, haraka: 'X.5.0', text: 'Other or undefined protocol status' },
  proto_invalid_command: { code: 550, haraka: 'X.5.1', text: 'Invalid command' },
  proto_syntax_error: { code: 550, haraka: 'X.5.2', text: 'Syntax error' },
  proto_too_many_recipients: { code: 450, haraka: 'X.5.3', text: 'Too many recipients' },
  proto_invalid_cmd_args: { code: 550, haraka: 'X.5.4', text: 'Invalid command arguments' },
  proto_wrong_version: { code: 450, haraka: 'X.5.5', text: 'Wrong protocol version' },
  // Class: Message Content or Media Status X.6.X
  media_unspecified: { code: 450, haraka: 'X.6.0', text: 'Other or undefined media error' },
  media_unsupported: { code: 550, haraka: 'X.6.1', text: 'Media not supported' },
  media_conv_prohibited: { code: 550, haraka: 'X.6.2', text: 'Conversion required and prohibited' },
  media_conv_unsupported: { code: 450, haraka: 'X.6.3', text: 'Conversion required but not supported' },
  media_conv_lossy: { code: 450, haraka: 'X.6.4', text: 'Conversion with loss performed' },
  media_conv_failed: { code: 450, haraka: 'X.6.5', text: 'Conversion failed' },
  // Class: Security or Policy Status X.7.X
  sec_unspecified: { code: 450, haraka: 'X.7.0', text: 'Other or undefined security status' },
  sec_unauthorized: { code: 550, haraka: 'X.7.1', text: 'Delivery not authorized, message refused' },
  sec_list_expn_prohibited: { code: 550, haraka: 'X.7.2', text: 'Mailing list expansion prohibited' },
  sec_conv_failed: { code: 550, haraka: 'X.7.3', text: 'Security conversion required but not possible' },
  sec_feature_unsupported: { code: 550, haraka: 'X.7.4', text: 'Security features not supported' },
  sec_crypto_failure: { code: 550, haraka: 'X.7.5', text: 'Cryptographic failure' },
  sec_crypto_algo_unsupported: { code: 450, haraka: 'X.7.6', text: 'Cryptographic algorithm not supported' },
  sec_msg_integrity_failure: { code: 550, haraka: 'X.7.7', text: 'Message integrity failure' },
  // Convenience functions
  no_such_user: { code: 550, haraka: 'X.1.1', text: 'No such user' },
  temp_resolver_failed: { code: 450, haraka: 'X.4.3', text: 'Temporary address resolution failure' },
  too_many_hops: { code: 550, haraka: 'X.4.6', text: 'Too many hops' },
  bad_sender_ip: { code: 550, haraka: 'X.7.1', text: 'Bad sender IP' },
  relaying_denied: { code: 550, haraka: 'X.7.1', text: 'Relaying denied' }
};
