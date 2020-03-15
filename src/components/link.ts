import { Link as GatsbyLink } from 'gatsby';
import styled from '@emotion/styled';
import { css } from 'theme-ui';

/**
 * Hack for Gatsby
 */
const Link = styled(GatsbyLink)(css({ variant: 'styles.a' }));

export default Link;
