import gql from 'graphql-tag';

export const PROMOTE_TO_PARTNER = gql`
  mutation PromoteToPartner($uid: String!) {
    promoteToPartner(uid: $uid)
  }
`;

export const PARTNER_TRACK_VISITOR = gql`
  mutation PartnerTrackVisitor($partnerId: String!) {
    partnerTrackVisitor(partnerId: $partnerId)
  }
`;